import { DependencyManager } from "./dependencyManager";
import { CreateClientPlayerAction } from "../domain/actions/provideClientPlayer"

export class ActionProvider {
    public static CreateClientPlayer() {
        // DependencyManager.GetOrInstantiate<CreateClientPlayerAction>(() => new CreateClientPlayerAction())
    }
}