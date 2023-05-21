abstract class Item
{
    protected string nombre;

    public Item(string nombre)
    {
        this.nombre = nombre;
    }

    public abstract void Usar(Jugador jugador);
}
