class Rifa : IWeightable
{
    public string jugador;
    public int weight;

    public int Weight => weight;

    public override string ToString()
    {
        return jugador;
    }
}

class TestRandom
{
    static Random rand = new Random();
    static List<EscuelaDeMagia> escuelas = new List<EscuelaDeMagia>()
    {
        EscuelaDeMagia.Vida, EscuelaDeMagia.Muerte, EscuelaDeMagia.Naturaleza, EscuelaDeMagia.Fuego
    };

    public static void Run()
    {
        // for (int i = 0; i < 10; i++)
        // {
        //     var escuela = EscuelaAlAzar();
        //     Console.WriteLine(escuela);
        // }

        WeightedList<Rifa> rifas = new WeightedList<Rifa>(
            new List<Rifa>()
            {
                new Rifa() { jugador = "Diego", weight = 3 },
                new Rifa() { jugador = "Cami", weight = 2 },
                new Rifa() { jugador = "Maxi", weight = 1 },
            }
        );

        for (int i = 0; i < 100; i++)
        {
            Console.WriteLine(rifas.Evaluate());
        }
    }

    private static EscuelaDeMagia EscuelaAlAzar()
    {
        return NextInList<EscuelaDeMagia>(escuelas);
    }

    private static bool NextBool()
    {
        return rand.Next(2) == 1;
    }

    private static T NextInList<T>(List<T> lista)
    {
        return lista[rand.Next(lista.Count)];
    }
}
