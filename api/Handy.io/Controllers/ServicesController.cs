using System.Linq;
using Handy.io.Models;
using Handy.io.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Handy.io.Controllers
{
    [ApiController]
    [Route("services")]
    public class ServicesController : ControllerBase
    {
        private readonly IServicesRepository _repository;

        public ServicesController(IServicesRepository repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Get all services
        /// </summary>
        /// <returns></returns>
        [HttpGet("all")]
        public IActionResult GetAll(string phrase)
        {
            var result = _repository
                .GetAll()
                .Select(x => new ServiceSearchByPhraseResult(x))
                .ToList();

            return Ok(result);
        }

        /// <summary>
        /// Get services by name or description
        /// </summary>
        /// <param name="phrase"></param>
        /// <returns></returns>
        [HttpGet("search/{phrase}")]
        public IActionResult GetByPhrase(string phrase)
        {
            var result = _repository
                .GetByPhrase(phrase)
                .Select(x => new ServiceSearchByPhraseResult(x))
                .ToList();

            return Ok(result);
        }

        /// <summary>
        /// Get top services
        /// </summary>
        /// <param name="quantity"></param>
        /// <returns></returns>
        [HttpGet("top-services/{quantity}")]
        public IActionResult GetTopServices(int quantity)
        {
            var result = _repository
                .GetTop(quantity)
                .Select(x => new ServiceSearchByPhraseResult(x))
                .ToList();

            return Ok(result);
        }

        /// <summary>
        /// Get service by ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var result = _repository.GetById(id);
            if (result == null)
            {
                return NotFound();
            }

            return Ok(new ServiceGetByIdResult(result));
        }

        /// <summary>
        /// Get services by owner ID
        /// </summary>
        /// <param name="ownerId"></param>
        /// <returns></returns>
        [HttpGet("owners/{ownerId}")]
        public IActionResult GetByOwnerId(long ownerId)
        {
            var result = _repository
                .GetByOwnerId(ownerId)
                .Select(x => new ServiceGetByOwnerResult(x))
                .ToList();

            return Ok(result);
        }

        /// <summary>
        /// Add new service
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /services
        ///     {
        ///        "name": "panele",
        ///        "ownerId": 1,
        ///        "owner": "paweł nowak",
        ///        "phoneNumber": "123-456-789",
        ///        "description": "no panele jak to panele"
        ///     }
        ///
        /// </remarks>
        /// <param name="service"></param>
        /// <returns></returns>
        [HttpPost("addService")]
        public IActionResult Create([FromBody] CreateServiceModel service)
        {
            var item = service.ToDomainModel();
            _repository.Create(item);
            return Ok(item.ServiceId);
        }

        /// <summary>
        /// Add new service
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /services
        ///     {
        ///        "name": "panele",
        ///        "ownerId": 1,
        ///        "owner": "paweł nowak",
        ///        "phoneNumber": "123-456-789",
        ///        "description": "no panele jak to panele"
        ///     }
        ///
        /// </remarks>
        /// <param name="service"></param>
        /// <returns>Service ID</returns>
        [HttpPost("updateService")]
        public IActionResult Update([FromBody] CreateServiceModel service)
        {
            //TODO: Add Implementation -> return updated service ID
            return Ok();
        }

        /// <summary>
        /// Delete the service
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _repository.Delete(id);
            return Ok();
        }
    }
}
