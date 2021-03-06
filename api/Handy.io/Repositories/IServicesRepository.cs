﻿using System.Collections.Generic;
using Handy.io.Models;

namespace Handy.io.Repositories
{
    public interface IServicesRepository
    {
        IEnumerable<Service> GetAll();

        IEnumerable<Service> GetByPhrase(string phrase);

        IEnumerable<Service> GetTop(int quantity);

        Service GetById(int id);

        IEnumerable<Service> GetByOwnerId(long ownerId);

        void Create(Service service);

        void Delete(int id);
    }
}
