namespace TestEvents
{
    class UI
    {
        public static void Log(string mensaje)
        {
            Console.WriteLine(mensaje);
        }
    }

    class BarraSalud
    {
        Jugador jugador;

        public BarraSalud(Jugador jugador)
        {
            this.jugador = jugador;
            jugador.SaludCambiada += CambioSalud;
        }

        private void CambioSalud(int nuevaSalud)
        {
            Console.WriteLine($"nueva salud: {nuevaSalud}");
        }
    }

    class VentanaFinDeJuego
    {
        Jugador jugador;

        public bool JuegoTerminado { get; private set; }

        public VentanaFinDeJuego(Jugador jugador)
        {
            this.jugador = jugador;
            this.JuegoTerminado = false;
            jugador.SaludCambiada += CambioSalud;
        }

        private void CambioSalud(int nuevaSalud)
        {
            if (nuevaSalud <= 0)
            {
                Console.WriteLine("JAJA PERDISTE");
                JuegoTerminado = true;
            }
        }
    }




    class TestEvents
    {
        public static void Run()
        {
            var jugador = new Jugador();
            var barra = new BarraSalud(jugador);
            var ventana = new VentanaFinDeJuego(jugador);

            while (!ventana.JuegoTerminado)
            {
                var key = Console.ReadKey();
                if (key.Key == ConsoleKey.UpArrow)
                    Console.WriteLine("Saltando");
                else if (key.Key == ConsoleKey.DownArrow)
                    Console.WriteLine("Agachando");

                // jugador.Daniar(30);
            }

            Console.WriteLine("Juego terminado");
        }
    }
}
