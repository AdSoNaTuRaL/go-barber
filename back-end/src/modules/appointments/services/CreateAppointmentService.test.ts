import * as CreateAppointmentService from "@modules/appointments/services/CreateAppointmentService"

// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new CreateAppointmentService.default({}, {}, {})
    })

    test("0", async () => {
        let inst2: any = new Date("01-13-2020")
        await inst.execute({ provider_id: "Credit Card Account", user_id: 12345, date: inst2 })
    })

    test("1", async () => {
        let inst2: any = new Date("01-01-2030")
        await inst.execute({ provider_id: "Credit Card Account", user_id: "da7588892", date: inst2 })
    })

    test("2", async () => {
        let inst2: any = new Date("01-13-2020")
        await inst.execute({ provider_id: "Investment Account", user_id: "bc23a9d531064583ace8f67dad60f6bb", date: inst2 })
    })

    test("3", async () => {
        let inst2: any = new Date("01-13-2020")
        await inst.execute({ provider_id: "Checking Account", user_id: 12345, date: inst2 })
    })

    test("4", async () => {
        let inst2: any = new Date("01-01-2030")
        await inst.execute({ provider_id: "Credit Card Account", user_id: "c466a48309794261b64a4f02cfcc3d64", date: inst2 })
    })

    test("5", async () => {
        let inst2: any = new Date("")
        await inst.execute({ provider_id: "", user_id: "", date: inst2 })
    })
})
