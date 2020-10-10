let carr = {
    galones: 0,
    maxgalones: 15,
    kmRecorridos: 0,
    tanquear: function(galones) {
        if (galones < 0 || galones > this.maxgalones) {
            console.log("No se puede tanquear el carro");
        } else {
            if (this.galones <= this.maxgalones) {
                this.galones += galones;
                console.log("El carro se tanqueo correctamente con " + galones + " Galones")
            } else {
                console.log("No se pudo tanquear el carro")
            }
        }
    },
    mover: function(Kilometros) {
        if (Kilometros > 0 || Kilometros < this.galones) {
            this.kmRecorridos += Kilometros;
            console.log("Se movio el carro " + Kilometros + " Kilometros")
        } else {
            console.log("No se movio el carro");
        }
    },

    getKilometros: function() {
        console.log(this.kmRecorridos);
    }

}

function process(n) {
    if (n >= 120000 && n < 200000) {
        console.log("Se hizo un descuento del 10% a: ", n);
        n -= (n * 0.10);
    } else if (n >= 200000 && n <= 500000) {
        console.log("Se hizo un descuento del 8% a: ", n);
        n -= (n * 0.08);
    } else if (n > 500000) {
        console.log("Se hizo un descuento del 5% a: ", n);
        n -= (n * 0.05);
    }
    return (n);
}