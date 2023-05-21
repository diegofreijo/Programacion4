class Jugador
{
    const int SALUD_MAXIMA = 100;

    int saludActual;

    public int Salud
    {
        get { return saludActual; }
        set
        {
            // if (value < 0 || value > SALUD_MAXIMA)
            //     throw new Exception($"Me pasaron la salud invalida {value}");
            if (value < 0)
                saludActual = 0;
            else if (value > SALUD_MAXIMA)
                saludActual = SALUD_MAXIMA;
            else
                saludActual = value;
        }
    }

    public Jugador()
    {
        this.saludActual = Jugador.SALUD_MAXIMA;
    }

    public Jugador(int saludActual)
    {
        this.saludActual = saludActual;
    }
}
