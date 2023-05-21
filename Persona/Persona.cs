// namespace Programacion4
// {
//     public class Persona
//     {
//         protected string nombre;
//         int edad;

//         public int Edad
//         {
//             get { return this.edad; }
//             set
//             {
//                 if (value < 0)
//                     throw new Exception("Me pasaron una edad negativa!");

//                 this.edad = value;
//             }
//         }

//         // public Persona()
//         // {
//         //     this.nombre = "<no especificado>";
//         //     this.edad = -1;
//         // }

//         public Persona(string nombre, int edad)
//         {
//             this.nombre = nombre;
//             this.edad = edad;
//         }

//         public virtual string Saludar()
//         {
//             return $"Hola, soy {nombre} y tengo {edad} años";
//         }

//         // public void Cumpleanos()
//         // {
//         //     if (bisiesto)
//         //         this.edad = this.edad + 4;
//         //     else
//         //         this.edad = this.edad + 1;
//         // }

//         // public int GetEdad()
//         // {
//         //     return this.edad;
//         // }

//         // public void SetEdad(int nuevaEdad)
//         // {
//         //     if (nuevaEdad < 0)
//         //         throw new Exception("Me pasaron una edad negativa!");

//         //     this.edad = nuevaEdad;
//         // }



//     }
// }
