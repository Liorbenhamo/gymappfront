import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./calculator.css";

function Calculator({ setTrainingplan, trainingplan }) {
  const [rating, setRating] = useState();
  let Bodyfatpercentage;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    Bodyfatpercentage =
      (459 /
        (1.0324 -
          0.19077 *
            Math.log(
              Number(data.waist) -
                Number(data.neck) +
                0.15456 * Math.log(Number(data.height))
            )) -
        450) /
      10;
    console.log(Bodyfatpercentage);
    if (Bodyfatpercentage > 33) {
      setRating(9);
    } else if (Bodyfatpercentage > 30) {
      setRating(8);
    } else if (Bodyfatpercentage > 27) {
      setRating(7);
    } else if (Bodyfatpercentage > 24) {
      setRating(6);
    } else if (Bodyfatpercentage > 21) {
      setRating(5);
    } else if (Bodyfatpercentage > 18) {
      setRating(4);
    } else if (Bodyfatpercentage > 15) {
      setRating(3);
    } else if (Bodyfatpercentage > 12) {
      setRating(2);
    } else if (Bodyfatpercentage > 9) {
      setRating(1);
    } else if (Bodyfatpercentage > 6) {
      setRating(0);
    }
  };
  useEffect(() => {
    setTrainingplan(workoutPlans[rating]);
  }, [rating]);

  const workoutPlans = [
    {
      name: "Strength Training for Beginners",
      days: [
        {
          name: "Day 1",
          exercises: [
            "Barbell Squats",
            "Bench Press",
            "Bent-Over Rows",
            "Shoulder Press",
            "Deadlifts",
          ],
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3",
          exercises: [
            "Barbell Squats",
            "Bench Press",
            "Bent-Over Rows",
            "Shoulder Press",
            "Deadlifts",
          ],
        },
        {
          name: "Day 4",
          rest: true,
        },
        {
          name: "Day 5",
          exercises: [
            "Barbell Squats",
            "Bench Press",
            "Bent-Over Rows",
            "Shoulder Press",
            "Deadlifts",
          ],
        },
        {
          name: "Day 6-7",
          rest: true,
        },
      ],
    },
    {
      name: "High-Intensity Interval Training (HIIT)",
      days: [
        {
          name: "Day 1",
          exercises: [
            "Treadmill Sprints",
            "Stationary Bike Intervals",
            "Rowing Machine Bursts",
          ],
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3",
          exercises: [
            "Treadmill Sprints",
            "Stationary Bike Intervals",
            "Rowing Machine Bursts",
          ],
        },
        {
          name: "Day 4",
          rest: true,
        },
        {
          name: "Day 5",
          exercises: [
            "Treadmill Sprints",
            "Stationary Bike Intervals",
            "Rowing Machine Bursts",
          ],
        },
        {
          name: "Day 6-7",
          rest: true,
        },
      ],
    },
    {
      name: "Upper/Lower Split",
      days: [
        {
          name: "Day 1 (Upper Body)",
          exercises: ["Barbell Bench Press", "Lat Pulldowns", "Shoulder Press"],
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3 (Lower Body)",
          exercises: ["Barbell Squats", "Deadlifts", "Lunges"],
        },
        {
          name: "Day 4",
          rest: true,
        },
        {
          name: "Day 5 (Upper Body)",
          exercises: ["Barbell Bench Press", "Lat Pulldowns", "Shoulder Press"],
        },
        {
          name: "Day 6-7",
          rest: true,
        },
      ],
    },
    {
      name: "Cardiovascular Endurance",
      days: [
        {
          name: "Day 1",
          exercise: "Moderate-intensity cardio on machines (30 minutes)",
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3",
          exercise: "Moderate-intensity cardio on machines (45 minutes)",
        },
        {
          name: "Day 4",
          rest: true,
        },
        {
          name: "Day 5",
          exercise:
            "High-intensity interval training (HIIT) on machines (20 minutes)",
        },
        {
          name: "Day 6-7",
          rest: true,
        },
      ],
    },
    {
      name: "Strength Training with Free Weights",
      days: [
        {
          name: "Day 1",
          exercises: ["Barbell Squats", "Dumbbell Bench Press", "Barbell Rows"],
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3",
          exercises: ["Barbell Squats", "Dumbbell Bench Press", "Barbell Rows"],
        },
        {
          name: "Day 4",
          rest: true,
        },
        {
          name: "Day 5",
          exercises: ["Barbell Squats", "Dumbbell Bench Press", "Barbell Rows"],
        },
        {
          name: "Day 6-7",
          rest: true,
        },
      ],
    },
    {
      name: "Powerlifting Routine",
      days: [
        {
          name: "Day 1 (Squat Focus)",
          exercises: [
            "Squats",
            "Bulgarian Split Squats",
            "Leg Press",
            "Calf Raises",
          ],
        },
        {
          name: "Day 2 (Bench Press Focus)",
          exercises: [
            "Bench Press",
            "Dumbbell Bench Press",
            "Tricep Pushdowns",
            "Chest Flyes",
          ],
        },
        {
          name: "Day 3 (Deadlift Focus)",
          exercises: [
            "Deadlifts",
            "Romanian Deadlifts",
            "Lat Pulldowns",
            "Barbell Rows",
          ],
        },
      ],
    },
    {
      name: "Hypertrophy-focused Workout",
      days: [
        {
          name: "Day 1 (Chest/Triceps)",
          exercises: [
            "Barbell Bench Press",
            "Dumbbell Incline Bench Press",
            "Chest Flyes",
            "Tricep Pushdowns",
            "Skull Crushers",
          ],
        },
        {
          name: "Day 2 (Back/Biceps)",
          exercises: [
            "Barbell Rows",
            "Lat Pulldowns",
            "Dumbbell Curls",
            "Cable Rows",
            "Hammer Curls",
          ],
        },
        {
          name: "Day 3 (Legs/Shoulders)",
          exercises: [
            "Barbell Squats",
            "Shoulder Press",
            "Lateral Raises",
            "Romanian Deadlifts",
            "Front Raises",
          ],
        },
      ],
    },
    {
      name: "Cardio and Strength Supersets",
      days: [
        {
          name: "Day 1",
          exercises: ["Barbell Squats", "Jump Rope"],
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3",
          exercises: ["Barbell Squats", "Jump Rope"],
        },
        {
          name: "Day 4",
          rest: true,
        },
        {
          name: "Day 5",
          exercises: ["Barbell Squats", "Jump Rope"],
        },
        {
          name: "Day 6-7",
          rest: true,
        },
      ],
    },
    {
      name: "Circuit Training",
      days: [
        {
          name: "Day 1",
          exercises: [
            "Dumbbell Lunges",
            "Kettlebell Swings",
            "Dumbbell Shoulder Press",
          ],
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3",
          exercises: [
            "Dumbbell Lunges",
            "Kettlebell Swings",
            "Dumbbell Shoulder Press",
          ],
        },
        {
          name: "Day 4",
          rest: true,
        },
        {
          name: "Day 5",
          exercises: [
            "Dumbbell Lunges",
            "Kettlebell Swings",
            "Dumbbell Shoulder Press",
          ],
        },
        {
          name: "Day 6-7",
          rest: true,
        },
      ],
    },
    {
      name: "CrossFit-style Workout",
      days: [
        {
          name: "Day 1",
          exercises: [
            "Box Jumps",
            "Kettlebell Swings",
            "Burpees",
            "Push Press",
            "Double Unders",
          ],
        },
        {
          name: "Day 2",
          rest: true,
        },
        {
          name: "Day 3",
          exercises: [
            "Deadlifts",
            "Wall Balls",
            "Pull-ups",
            "Handstand Push-ups",
            "Rowing Machine Sprints",
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <div className="bodycalculator">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="formregistercalculator"
        >
          <p className="titleregister">find fat mass </p>
          <p className="messageregister">
            find your fat mass and get starting workout program
          </p>
          <br />
          <div className="flexregister">
            <label>
              <input
                required=""
                type="number"
                className="inputregister"
                {...register("waist", { required: true })}
              />
              {errors.waist && (
                <div>dont fit the condition:{errors.waist.type}</div>
              )}
              <span>waist</span>
            </label>
            <label>
              <input
                required=""
                type="number"
                className="inputregister"
                {...register("hips", { required: true })}
              />
              {errors.hips && (
                <div>dont fit the condition:{errors.hips.type}</div>
              )}
              <span>hips</span>
            </label>
            <br />
            <label>
              <input
                required=""
                type="number"
                className="inputregister"
                {...register("height", { required: true })}
              />
              {errors.height && (
                <div>dont fit the condition:{errors.height.type}</div>
              )}
              <span>height</span>
            </label>
            <br />
            <label>
              <input
                required=""
                type="number"
                className="inputregister"
                {...register("neck", { required: true })}
              />
              {errors.neck && (
                <div>dont fit the condition:{errors.neck.type}</div>
              )}
              <span>neck</span>
            </label>
          </div>
          <br />
          <input type="submit" className="submitregister" />
        </form>
      </div>
    </div>
  );
}

export default Calculator;
