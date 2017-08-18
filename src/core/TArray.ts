export abstract class  TArray<T>
{
    protected arr:T[] = [];
    constructor()
    {

    }
    abstract addItem(t:T):void;
    public dispose():void
    {
        this.clear();
    }
    protected clear():void
    {
        throw "has not clear";
    }

}