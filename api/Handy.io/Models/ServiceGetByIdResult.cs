namespace Handy.io.Models
{
    public class ServiceGetByIdResult
    {
        public ServiceGetByIdResult(Service service)
        {
            Id = service.ServiceId;
            Name = service.Name;
            Added = service.Added;
            Owner = service.Owner;
            OwnerId = service.OwnerId;
            PhoneNumber = service.PhoneNumber;
            Description = service.Description;
        }

        public int Id { get; }
        public string Name { get; }
        public string Added { get; }
        public string Owner { get; }
        public long OwnerId { get; }
        public string PhoneNumber { get; }
        public string Description { get; }
    }
}
