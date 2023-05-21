class Program
{
    static void Main()
    {
        var jugador = new Jugador(40);

        Console.WriteLine($"Salud inicial: {jugador.Salud}");

        var bomba = new ItemDaniador("Bomba", 30);
        bomba.Usar(jugador);
        Console.WriteLine($"Salud post bomba: {jugador.Salud}");

        var pocion = new ItemCurador("Pocion magica", 20);
        pocion.Usar(jugador);
        Console.WriteLine($"Salud post pocion: {jugador.Salud}");

        var varita = new ItemCurador("Varita magica", 50);
        varita.Usar(jugador);
        Console.WriteLine($"Salud post Varita magica: {jugador.Salud}");


        // var item = new Item("Varita magica");
        // item.Usar(jugador);
        // Console.WriteLine($"Salud post varita: {jugador.Salud}");
    }
}
