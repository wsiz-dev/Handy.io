namespace Handy.io.Models
{
    public class Service
    {
        public Service(int serviceId, string name, string added, long ownerId, string owner, string phoneNumber, string description)
        {
            ServiceId = serviceId;
            Name = name;
            Added = added;
            OwnerId = ownerId;
            Owner = owner;
            PhoneNumber = phoneNumber;
            Description = description;
        }

        public int ServiceId { get; }
        public string Name { get; }
        public string Added { get; }
        public long OwnerId { get; }
        public string Owner { get; }
        public string PhoneNumber { get; }
        public string Description { get; }
    }
}
