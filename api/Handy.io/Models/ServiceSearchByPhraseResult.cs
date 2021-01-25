namespace Handy.io.Models
{
    public class ServiceSearchByPhraseResult
    {
        public ServiceSearchByPhraseResult(Service service)
        {
            Id = service.ServiceId;
            Name = service.Name;
            Added = service.Added;
            PhoneNumber = service.PhoneNumber;
            Description = service.Description;
        }

        public int Id { get; }
        public string Name { get; }
        public string Added { get; }
        public string PhoneNumber { get; }
        public string Description { get; }
    }
}