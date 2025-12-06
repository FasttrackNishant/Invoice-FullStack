using InvoiceBackend.Interfaces;
using InvoiceBackend.Models;
using Microsoft.AspNetCore.Mvc;


namespace InvoiceBackend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class InvoiceController : ControllerBase
{
    private readonly IInvoiceRepository _repository;

    public InvoiceController(IInvoiceRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Invoice>>> GetInvoices()
    {
        var invoices = await _repository.GetAllAsync();
        
        var invoiceDtos = invoices.Select(invoice => new InvoiceDto
        {
            InvoiceID = invoice.InvoiceID,
            CustomerName = invoice.CustomerName,
            Items = invoice.Items.Select(ii => new InvoiceItemDto
            {
                ItemID = ii.ItemID,
                Name = ii.Name,
                Price = ii.Price
            }).ToList()
        });

        return Ok(invoiceDtos);
    }
}