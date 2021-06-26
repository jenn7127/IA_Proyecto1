class Reversi {


    constructor(){


        this.valores=[
            [120,-20,20,5,5,20,-20,120] //0-7
            [-20,-40,-5,-5,-5,-5,-40,-20] //8-15
            [20,-5,15,3,3,15,-5,20] //16-23
            [5,-5,3,3,3,3,-5,5] //24-31
            [5,-5,3,3,3,3,-5,5] //32-39
            [20,-5,15,3,3,15,-5,20] //40-47
            [-20,-40,-5,-5,-5,-5,-40,-20] //48-55
            [120,-20,20,5,5,20,-20,120] //56-63
            ]
    
        this.inicial=[
                [2,2,2,2,2,2,2,2] //0-7
                [2,2,2,2,2,2,2,2]  //8-15
                [2,2,2,2,2,2,2,2]  //16-23
                [2,2,2,2,2,2,2,2]  //24-31
                [2,2,2,2,2,2,2,2]  //32-39
                [2,2,2,2,2,2,2,2] //40-47
                [2,2,2,2,2,2,2,2]  //48-55
                [2,2,2,2,2,2,2,2]  //56-63
                ]
    
    
        this.soluciones=[]
    }



setNewInical(turno,solucion){

    this.inicial[solucion[0]][solucion[1]]=turno
       
}


getPuntaje(){
    for (x=0;x<8;x++) {
        for (y=0;y<8;y++) {
            if(this.inicial[x][y]){

            }
        }
    }
}

getInicial(){
    return this.inicial
}

getSoluciones(){
    return this.soluciones
}

LlenarInicial(estado){
var estadArray=estado.split(",")
var cont=0
for (x=0;x<8;x++) {
    for (y=0;y<8;y++) {
      this.inicial[x][y]=estadArray[cont]
      cont++
    }
}
}

RecorridoH1(turno, estado){

for (x=0;x<8;x++) {
    for (y=0;y<8;y++) {
    
      var aux=y+1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux<8 & estado[x][aux]!==2 )
            {
                if(estado[x][aux]!==turno)
                {
                    if (aux+1<8)
                    {
                        if (estado[x][aux+1]===2)
                        {
                            this.soluciones.push([x,aux+1])
                        }
                    }
                    
                    axu++
                }else if (estado[x][aux]===turno){
                    aux=8
                }
                
            }
        }
      }
    }
}
}

RecorridoH2(turno, estado){

for (x=0;x<8;x++) {
    for (y=7;y>-1;y--) {
    
      var aux=y-1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux>-1 & estado[x][aux]!==2 )
            {
                if(estado[x][aux]!==turno)
                {
                    if (aux-1>-1)
                    {
                        if (estado[x][aux-1]===2)
                        {
                            this.soluciones.push([x,aux-1])
                        }
                    }                        
                    aux--
                }else {
                    aux=-1
                }
                
            }
        }
      }
    }
}
}



RecorridoV1(turno, estado){

for (y=0;y<8;y++) {
    for  (x=0;x<8;x++){
    
      var aux=x+1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux<8 & estado[aux][y]!==2 )
            {
                if(estado[aux][y]!==turno)
                {
                    if (aux+1<8)
                    {
                        if (estado[aux+1][y]===2)
                        {
                            this.soluciones.push([aux+1,y])
                        }
                    }                                     
                    axu++
                }else {
                    aux=8
                }
            }
        }
      }
    }
}
}


RecorridoV2(turno, estado){

for (y=0;y<8;y++) {
    for  (x=7;x<8;x--){
    
      var aux=x-1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux>-1 & estado[aux][y]!==2 )
            {
                if(estado[aux][y]!==turno)
                {
                    if (aux-1>-1)
                    {
                        if (estado[aux-1][y]===2)
                        {
                            this.soluciones.push([aux-1,y])
                        }
                    }
                    axu--
                }else {
                    aux=-1
                }
            }
        }
      }
    }
}
}



RecorridoD1(turno, estado){

for (x=0;x<8;x++) {
    for (y=0;y<8;y++) {     
      var aux1=x-1
      var aux2=y-1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux1>-1 & aux2>-1 & estado[aux1][aux2]!==2 )
            {
                if(estado[aux1][aux2]!==turno)
                {
                    aux1--
                    aux2--
                    if(aux1>-1 & aux2>-1)
                    {
                        if (estado[aux1][aux2]===2)
                        {
                            this.soluciones.push([aux1,aux2])
                        }
                    }

                    
                }else if (estado[aux1][aux2]===turno){
                    aux1=-1
                    aux2=-1
                }
                
            }
        }
      }
    }
}
}

RecorridoD2(turno, estado){

for (x=0;x<8;x++) {
    for (y=0;y<8;y++) {     
      var aux1=x-1
      var aux2=y+1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux1>-1 & aux2<8 & estado[aux1][aux2]!==2 )
            {
                if(estado[aux1][aux2]!==turno)
                {
                    aux1--
                    aux2++
                    if(aux1>-1 & aux2<8)
                    {
                        if (estado[aux1][aux2]===2)
                        {
                            this.soluciones.push([aux1,aux2])
                        }
                    }
                    
                }else if (estado[aux1][aux2]===turno){
                    aux1=-1
                    aux2=8
                }
                
            }
        }
      }
    }
}
}

RecorridoD3(turno, estado){

for (x=0;x<8;x++) {
    for (y=0;y<8;y++) {     
      var aux1=x+1
      var aux2=y-1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux1<8 & aux2>-1 & estado[aux1][aux2]!==2 )
            {
                if(estado[aux1][aux2]!==turno)
                {
                    aux1++
                    aux2--
                    if(aux1<8 & aux2>-1)
                    {
                        if (estado[aux1][aux2]===2)
                        {
                            this.soluciones.push([aux1,aux2])
                        }
                    }
                    
                }else if (estado[aux1][aux2]===turno){
                    aux1=8
                    aux2=-1
                }
                
            }
        }
      }
    }
}
}

RecorridoD4(turno, estado){

for (x=0;x<8;x++) {
    for (y=0;y<8;y++) {     
      var aux1=x+1
      var aux2=y+1
      if(estado[x][y]!==2)
      {
        if(estado[x][y]===turno)
        {
            while(aux1<8 & aux2<8 & estado[aux1][aux2]!==2 )
            {
                if(estado[aux1][aux2]!==turno)
                {
                    aux1++
                    aux2++
                    if(aux1<8 & aux2<8)
                    {
                        if (estado[aux1][aux2]===2)
                        {
                            this.soluciones.push([aux1,aux2])
                        }
                    }
                    
                }else if (estado[aux1][aux2]===turno){
                    aux1=8
                    aux2=8
                }
            }
        }
      }
    }
}
}



}
