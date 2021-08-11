export class DependencyManager {
    private static _map = new Map<any, Object>();

    public static GetOrInstantiate<Type extends Object>(instantiator: () => Type) : Type {
        if (this._map.has(arguments[0])) return this._map.get(arguments[0]) as Type
        const instance = instantiator()
        this._map.set(arguments[0], instance)
        return instance
    }
}