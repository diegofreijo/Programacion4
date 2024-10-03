using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rotador : MonoBehaviour
{
    void FixedUpdate()
    {
        transform.Rotate(Vector3.up, 2f);
    }
}
