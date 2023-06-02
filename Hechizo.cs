class Hechizo : IUsable
{
    string nombre;
    int cura;
    int mana;

    public Hechizo(string nombre, int cura, int mana)
    {
        this.nombre = nombre;
        this.cura = cura;
        this.mana = mana;
    }

    public void Usar(Jugador jugador)
    {
        jugador.Salud += this.cura;
        // jugador.Mana -= this.mana;
    }

    public override string ToString()
    {
        return $"Hechizo: {nombre}";
    }
}
