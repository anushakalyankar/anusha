function volume(input1, input2){
    radius = input1;
    height = input2;
    let volumeOfCylinder;
    if(radius < 0 || height < 0){
        volumeOfCylinder = 0;
    }
    else if(radius > 250 || height > 250){
        volumeOfCylinderume = 0;
    }
    else{
        volumeOfCylinder = 3.14*(radius)*(radius)*(height)

    }

    return volumeOfCylinder;
}