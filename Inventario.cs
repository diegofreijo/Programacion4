class Inventario<T> where T : IUsable
{
    List<T> elementos = new List<T>();

    public void Agregar(T item)
    {
        elementos.Add(item);
    }

    public override string ToString()
    {
        var ret = "";
        foreach (var e in elementos)
        {
            ret += $"{e}, ";
        }
        return ret;
    }

    public void Usar(Jugador jugador, int indice)
    {
        T elemento = elementos[indice];
        Console.WriteLine($"Usando {elemento}");
        elemento.Usar(jugador);
        Console.WriteLine($"Salud post {elemento}: {jugador.Salud}");
        // elementos[indice] = null;
    }


    public void UsarTodo(Jugador jugador)
    {
        for (int i = 0; i < elementos.Count; i++)
        {
            Usar(jugador, i);
        }
    }
}
