import { ValueObject } from "../../shared/models/valueObject";

export interface AxisPositionProps {
    angle: number;
}

export class AxisPosition extends ValueObject<AxisPositionProps> {
    public readonly angle: number;

    private constructor(props: AxisPositionProps) {
        super(props);
        this.angle = props.angle;
    }

    public static create(props: AxisPositionProps): AxisPosition {
        return new AxisPosition(props)
    }

}