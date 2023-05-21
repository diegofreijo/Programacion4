class ItemDaniador : Item
{
    int danio;

    public ItemDaniador(string nombre, int danio) :
        base(nombre)
    {
        this.danio = danio;
    }

    public override void Usar(Jugador jugador)
    {
        jugador.Salud -= this.danio;
    }
}
