using Newtonsoft.Json;

namespace Handy.io.Models
{
    public class CreateServiceModel
    {
        [JsonConstructor]
        public CreateServiceModel(int id, string name, string added, int ownerId, string owner, string phoneNumber, string description)
        {
            Id = id;
            Name = name;
            Added = added;
            OwnerId = ownerId;
            Owner = owner;
            PhoneNumber = phoneNumber;
            Description = description;
        }

        public int Id { get; }
        public string Name { get; }
        public string Added { get; }
        public int OwnerId { get; }
        public string Owner { get; }
        public string PhoneNumber { get; }
        public string Description { get; }

        public Service ToDomainModel() =>
            new Service(Id, Name, Added, OwnerId, Owner, PhoneNumber, Description);
    }
}