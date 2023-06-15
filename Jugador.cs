using TestEvents;

class Jugador
{
    const int SALUD_MAXIMA = 100;

    public event Action<int>? SaludCambiada;
    private int saludActual;

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

            if (SaludCambiada != null)
                SaludCambiada(saludActual);
        }
    }

    public Jugador()
    {
        this.Salud = Jugador.SALUD_MAXIMA;
    }

    public Jugador(int saludActual)
    {
        this.Salud = saludActual;
    }

    public void Daniar(int danio)
    {
        this.Salud -= danio;
    }
}
