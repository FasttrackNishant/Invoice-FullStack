using InvoiceBackend.Interfaces;
using InvoiceBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace InvoiceBackend.Infrastructure.Services;

public class InvoiceRepository : IInvoiceRepository
{
    private readonly AppDbContext _context;

    public InvoiceRepository(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Invoice>> GetAllAsync()
    {
        return await _context.Invoices
            .Include(i => i.Items)
            .ToListAsync();
    }
    
    private async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}