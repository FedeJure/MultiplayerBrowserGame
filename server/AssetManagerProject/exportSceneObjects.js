function exportMap(sceneName) {
    mapFounded = true
    const path = require('path');
    const fs = require('fs');
    const directoryPath = path.join(__dirname, 'src/maps/');
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            if (file === `${sceneName}.scene`) {
                const scene = JSON.parse(fs.readFileSync(directoryPath + file));

                scene.displayList = scene.displayList.map(obj => {
                    if (obj.list) {
                        obj.list = obj.list.map(obj1 => ({ ...obj1, label: getId() }))
                    }
                    return ({ ...obj, label: getId() })
                })
                fs.writeFileSync(directoryPath + file, JSON.stringify(scene), { encoding: 'utf8' })
                console.log('Successfully done!')
            }
        });
    });
}

let mapFounded = false
process.argv.forEach((arg, i) => {
    if (arg === '--mapName') {
        if (process.argv[i + 1]) return exportMap(process.argv[i + 1])
    }
})

if (!mapFounded) console.log("Must to provide a --mapName [name] option")