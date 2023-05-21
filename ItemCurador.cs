class ItemCurador : Item
{
    int cura;

    public ItemCurador(string nombre, int cura) :
        base(nombre)
    {
        this.cura = cura;
    }

    public override void Usar(Jugador jugador)
    {
        Console.WriteLine($"Usando item curador llamado {nombre}");
        jugador.Salud += this.cura;
    }
}
