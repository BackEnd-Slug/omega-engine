class RoolText
{
    constructor()
    {
        this.result = "";
        this.suggested = ["Afag", "Ajan", "Akan", "Alkinpz", "Amiz", "Annontation", "Annontations", "Anzos", "Aqis", "Arror", "Asu", "Attinta", "Avan", "Avance", "AvanceDragon", "AvanceTettor", "Avene", "Aweld", "Aweself", "Axu", "Azus", "Bad", "BadAdvanced", "BadCity", "BadEyes", "BadGender", "BadHindi", "BadJapan", "BadLatin", "BadLyen", "BadNepal", "BadOctoplus", "BadPipe", "BadQuery", "BadResource", "BadRussian", "BadSun", "BadThai", "BadUrdu", "BadWeld", "BadWeself", "BadXas", "BadYou", "BadZoo", "Bed", "BedSign", "BedTamil", "BedYear", "Bin", "Binary", "BinaryJohn", "Binyou", "Bjohn", "Bkader", "Bod", "Boffer", "Bohindi", "Bpquz", "Bqan", "Bquy", "Brasil", "Brazil", "Brend", "BrendJohn", "BrendJohna", "Bsoun", "Bszuns", "BszunsSmith", "Burdu", "Bvjohn", "By", "Bye", "Byyn", "Bzyo", "Ca", "Cads", "Caf", "Can", "Canada", "Cat", "Cau", "Caver", "Cbad", "CbadJohn", "Cben", "Cbin", "Cbinary", "Ccad", "Cen", "CenJohn", "CenYear", "Cfn", "Cfy", "Chi", "Chindi", "Chtml", "Ci", "Cidane", "Ciend", "Cifof", "Ciji", "CijiJohn", "Cikorean", "Cili", "Ciyou", "Cjek", "Cl", "CMac", "CNin", "CNon", "COcto", "Code", "CodeJohn", "CodeTear", "CodeZone", "Codne", "CodneJohn", "Coene", "Colf", "Cony", "ConyJohn", "Copy", "CopyBasic", "CopyBlogger", "CopyJohn", "CopyLink", "CopyWorld", "Coqy", "Coson", "Cotonese", "Coyen", "Cqon", "Csan", "CsanPlus", "CsanYou", "Ctan", "CtanJohn", "CtanMinder", "CtanWindows", "Cun", "Cube", "CubeJohn", "CubeXYZ", "Cubfan", "Cuby", "Cucu", "Cufan", "Cujohn", "Cuyou", "Cuzone", "Cvietnam", "Cvietnamese", "CvietnameseJohn", "Cweself", "Cxas", "Czad", "Dan", "Danger", "Dangez", "Danguk", "Dapy", "Daqy", "Darnger", "Dayou", "Dban", "DbanJohn", "Dben", "Dbinary", "DbinaryJohn", "DbJohn", "Dcou", "Dcyou", "Ddanger", "DdangerZone", "Ddenger", "Dead", "Deay", "Deby", "Dedy", "Deet", "DeetShare", "Dfon", "Dfonza", "Dfpon", "Dfgin"] //High world not supported.
    }

    setPlayerName()
    {
        this.result = this.suggested[Math.floor(Math.random() * this.suggested.length)]
        game.settings.playerName = this.result
    }
}