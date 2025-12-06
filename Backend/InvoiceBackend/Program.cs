using InvoiceBackend.Infrastructure;
using InvoiceBackend.Infrastructure.Services;
using InvoiceBackend.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// DB
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("InvoiceAppConnectionString")));

// DI
builder.Services.AddScoped<IInvoiceRepository, InvoiceRepository>();

// Controllers + Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowUI", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Swagger UI (optional)
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Invoice API V1");
    c.RoutePrefix = string.Empty;
});

// IMPORTANT: Apply CORS BEFORE auth and BEFORE mapping controllers
app.UseCors("AllowUI");

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();