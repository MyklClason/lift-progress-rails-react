class LiftsController < ApplicationController
  def index
    @lifts = Lift.all
  end

  def create
    @lift = Lift.new(lift_params)

    if @lift.save
      render json: @lift
    else
      render json: @lift.errors, status: :unprocessable_entity
    end
  end

  private

    def lift_params
      params.require(:lift).permit(:date, :liftname, :ismetric, :weightlifted, :repsperformed,
                                   :onerm)
    end
end
