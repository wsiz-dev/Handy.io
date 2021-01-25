namespace Handy.io.Models
{
    public class TopServiceResult
    {
        public TopServiceResult(int id, string name, string owner)
        {
            Id = id;
            Name = name;
            Owner = owner;
        }

        public int Id { get; }
        public string Name { get; }
        public string Owner { get; }
    }
}