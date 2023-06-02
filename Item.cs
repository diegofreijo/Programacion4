abstract class Item : IUsable
{
    protected string nombre;

    public Item(string nombre)
    {
        this.nombre = nombre;
    }

    public abstract void Usar(Jugador jugador);

    public override string ToString()
    {
        return $"Item {nombre}";
    }
}
