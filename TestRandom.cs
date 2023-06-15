// class TestRandom
// {
//     class Rifa : IWeightable
//     {
//         public Jugador jugador;
//         public int weight;

//         public int Weight => weight;

//         public override string ToString()
//         {
//             return jugador.ToString();
//         }
//     }

//     static Random rand = new Random();
//     static List<EscuelaDeMagia> escuelas = new List<EscuelaDeMagia>()
//     {
//         EscuelaDeMagia.Vida, EscuelaDeMagia.Muerte, EscuelaDeMagia.Naturaleza, EscuelaDeMagia.Fuego
//     };

//     public static void Run()
//     {
//         // for (int i = 0; i < 10; i++)
//         // {
//         //     var escuela = EscuelaAlAzar();
//         //     Console.WriteLine(escuela);
//         // }

//         WeightedList<Rifa> rifas = new WeightedList<Rifa>(
//             new List<Rifa>()
//             {
//                 new Rifa() { jugador = new Jugador() {nombre = "diego"}, weight = 3 },
//             }
//         );

//         // Mal diseño: acopla el peso al jugador!
//         // WeightedList<Jugador> jugadores = new WeightedList<Jugador>(
//         //     new List<Jugador>()
//         //     {
//         //         new Jugador() { nombre = "diego", Weight = 2 },
//         //         new Jugador() { nombre = "cami", Weight = 5 },
//         //         new Jugador() { nombre = "maxi", Weight = 1},
//         //     }
//         // );

//         var elegidos = new List<Jugador>();

//         for (int i = 0; i < 100; i++)
//         {
//             var rifaElegida = rifas.Evaluate();
//             elegidos.Add(rifaElegida.jugador);
//         }

//     }

//     class Jugador
//     {
//         public string nombre;
//         // public int Weight { get; set; }
//     }

//     private static EscuelaDeMagia EscuelaAlAzar()
//     {
//         return NextInList<EscuelaDeMagia>(escuelas);
//     }

//     private static bool NextBool()
//     {
//         return rand.Next(2) == 1;
//     }

//     private static T NextInList<T>(List<T> lista)
//     {
//         return lista[rand.Next(lista.Count)];
//     }
// }
