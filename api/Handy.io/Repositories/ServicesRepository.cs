using System;
using System.Collections.Generic;
using System.Linq;
using Handy.io.Models;
using MongoDB.Driver;

namespace Handy.io.Repositories
{
    internal class ServicesRepository : IServicesRepository
    {
        private readonly IMongoCollection<Service> _services;
        
        public ServicesRepository(MongoSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _services = database.GetCollection<Service>(settings.ServicesCollectionName);
        }
        
        public IEnumerable<Service> GetByPhrase(string phrase)
        {
            return _services
                .Find(x => x.Name.ToLower().Contains(phrase.ToLower()) ||
                           x.Description.ToLower().Contains(phrase.ToLower()))
                .ToList();
        }

        public IEnumerable<Service> GetTop(int quantity)
        {
            var random = new Random();
            return _services
                .Find(x => true)
                .ToList()
                .OrderBy(x => random.Next())
                .Take(quantity)
                .ToList();
        }

        public Service GetById(int id)
        {
            return _services
                .Find(x => x.ServiceId == id)
                .SingleOrDefault();
        }

        public IEnumerable<Service> GetByOwnerId(int ownerId)
        {
            return _services
                .Find(x => x.OwnerId == ownerId)
                .ToList();
        }

        public void Create(Service service)
        {
            _services.InsertOne(service);
        }

        public void Delete(int id)
        {
            _services.FindOneAndDelete(x => x.ServiceId == id);
        }
    }
}