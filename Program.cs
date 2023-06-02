using System.ComponentModel.Design;
class Program
{
    static void Main()
    {
        var jugador = new Jugador(40);
        Console.WriteLine($"Salud inicial: {jugador.Salud}");

        var bomba = new ItemDaniador("Bomba", 30);
        // bomba.Usar(jugador);
        // Console.WriteLine($"Salud post bomba: {jugador.Salud}");

        var pocion = new ItemCurador("Pocion magica", 20);
        // pocion.Usar(jugador);
        // Console.WriteLine($"Salud post pocion: {jugador.Salud}");

        var varita = new ItemCurador("Varita magica", 80);
        // varita.Usar(jugador);
        // Console.WriteLine($"Salud post Varita magica: {jugador.Salud}");


        // var item = new Item("Varita magica");
        // item.Usar(jugador);
        // Console.WriteLine($"Salud post varita: {jugador.Salud}");

        ///////////////////////////

        var items = new Inventario<Item>();
        items.Agregar(bomba);
        items.Agregar(varita);

        Console.WriteLine($"Inventario inicial: {items}");
        items.Usar(jugador, 0);
        // Console.WriteLine($"Inventario post usar 0: {items}");
        // inventario.UsarTodo(jugador);
        Console.WriteLine($"Inventario final: {items}");

        ///////////////////////////

        var curar = new Hechizo("Curar", 100, 44);

        var hechizos = new Inventario<Hechizo>();
        hechizos.Agregar(curar);

        Console.WriteLine($"Hechizos iniciales: {hechizos}");
        hechizos.Usar(jugador, 0);
        Console.WriteLine($"Hechizos final: {hechizos}");




        //////////////////////////////
        /// Estructuras de datos

        // Array
        // int[] inventario = new int[5];
        // inventario[0] = 43;
        // inventario[1] = 9;
        // Console.WriteLine(inventario[1]);

        /// List
        // var inventario = new List<int>();
        // inventario.Add(33);
        // inventario.Add(77);
        // Console.WriteLine(inventario[0]);
        // Console.WriteLine(inventario[1]);

        // Diccionario
        // var edades = new Dictionary<string, int>();
        // edades.Add("diego", 37);
        // edades.Add("maxi", 21);
        // edades.Add("cami", 22);
        // Console.WriteLine(edades["diego"]);
        // Console.WriteLine(edades["cami"]);

        //////////////////////////////
    }
}
