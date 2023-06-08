enum EscuelaDeMagia
{
    Vida, Muerte, Naturaleza, Fuego, Agua
}

class Hechizo : IUsable
{
    string nombre;
    int cura;
    int mana;
    public EscuelaDeMagia escuela;

    public Hechizo(string nombre, int cura, int mana, EscuelaDeMagia escuela)
    {
        this.nombre = nombre;
        this.cura = cura;
        this.mana = mana;
        this.escuela = escuela;
    }

    public void Usar(Jugador jugador)
    {
        jugador.Salud += this.cura;
        // jugador.Mana -= this.mana;
    }

    public override string ToString()
    {
        return $"Hechizo: {nombre} de la escuela {escuela}";
    }
}
