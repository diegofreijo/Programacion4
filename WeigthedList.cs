using System.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

public interface IWeightable
{
    int Weight { get; }
}

public class WeightedList<T> where T : IWeightable
{
    private List<T> chances;
    private Random rand = new Random();

    public WeightedList(List<T> chances)
    {
        this.chances = chances;
    }

    public T Evaluate()
    {
        var totalWeight = 0;
        foreach (var weight in chances)
        {
            totalWeight += weight.Weight;
        }

        var rolled = rand.Next(totalWeight);
        foreach (var chance in chances)
        {
            rolled -= chance.Weight;
            if (rolled < 0)
                return chance;
        }

        throw new System.Exception("WeightedList failed to select a chance, this shouldn't have happened");
    }
}
