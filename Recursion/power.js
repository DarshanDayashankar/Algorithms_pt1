function power (base, exponent){
    if (exponent === 0) return 1;
    else if (exponent < 0) return (power(base, exponent+1) / base);
    else return (base * power(base, exponent-1));
}