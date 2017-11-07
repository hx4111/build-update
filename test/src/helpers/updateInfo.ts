const rootDir = path.join(__dirname, "../../..")
const util = require(`${rootDir}/packages/builder-util/out/util`)
const hashFile = util.hashFile
import path from 'path'

const filepath = path.join('C:\\Users\\haoxu\\Desktop\\玩客币钱包打包工具\\玩客币钱包打包工具\\OSCWallet\\OTCWalletSetup.exe')
getUpdateInfo()

function getUpdateInfo() {
    hashFile(filepath, "sha256", "hex").then((data: string) => {
        let sha2 = data
        hashFile(filepath).then((res: string) => {
            let sha512 = res
            console.info({
                sha2: sha2,
                sha512: sha512
            })
        })
    })
}