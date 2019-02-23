

QUnit.test("TestVolume",function(assert)
{
    var result=volume(5,3);
    assert.equal(result,"235.5","Volume of the cylinder of these inputs is 235.5");
});


QUnit.test("TestVolume",function(assert)
{
    var result=volume(7,2);
    assert.equal(result,"307.72","Volume of the cylinder of these inputs is 307.72");
});


QUnit.test("TestVolume",function(assert)
{
    var result=volume(3,4);
    assert.equal(result,"113.03999999999999","Volume of the cylinder of these inputs is 113.03999999999999");
});


QUnit.test("TestVolume",function(assert)
{
    var result=volume(6,8);
    assert.equal(result,"904.3199999999999","Volume of the cylinder of these inputs is 904.3199999999999");
});


QUnit.test("TestVolume",function(assert)
{
    var result=volume(9,3);
    assert.equal(result,"763.02","Volume of the cylinder of these inputs is 763.02");
});

QUnit.test("TestVolume",function(assert)
{
    var result=volume(-9,3);
    assert.equal(result,"-763.02","Volume of the cylinder of these inputs is -763.02");
});