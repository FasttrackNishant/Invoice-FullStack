using InvoiceBackend.Models;
namespace InvoiceBackend.Interfaces;

public interface IInvoiceRepository
{
    Task<IEnumerable<Invoice>> GetAllAsync();
}