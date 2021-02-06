using System;
using Newtonsoft.Json;

namespace Handy.io.Models
{
    public class CreateServiceModel
    {
        [JsonConstructor]
        public CreateServiceModel(string name, string ownerId, string owner, string phoneNumber, string description)
        {
            Name = name;
            OwnerId = long.Parse(ownerId);
            Owner = owner;
            PhoneNumber = phoneNumber;
            Description = description;
        }

        public string Name { get; }
        public long OwnerId { get; }
        public string Owner { get; }
        public string PhoneNumber { get; }
        public string Description { get; }

        public Service ToDomainModel() =>
            new Service(new Random().Next(0, int.MaxValue), Name, DateTime.UtcNow.ToShortDateString(), OwnerId, Owner, PhoneNumber, Description);
    }
}
