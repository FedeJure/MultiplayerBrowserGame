export function Log(classType: { constructor: {name: string}}, ...args: Object[] ) {
    const d = new Date()
    console.log(`${d.toUTCString()} -- [${classType.constructor.name}] ::`, ...args)
}

