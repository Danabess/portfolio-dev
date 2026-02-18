import { AllCases } from "./AllCases";


export default function ItemExistCheck(video_id: string | undefined) {
    for (var i = 0; i < AllCases.length; i += 1) {
        if (AllCases[i].title == video_id) {
            return true
        }
    }

    return false
}