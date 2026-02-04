"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock workout data for UI demonstration
const mockWorkouts = [
  {
    id: "1",
    name: "Bench Press",
    sets: [
      { weight: 135, reps: 10 },
      { weight: 155, reps: 8 },
      { weight: 175, reps: 6 },
    ],
  },
  {
    id: "2",
    name: "Squats",
    sets: [
      { weight: 185, reps: 10 },
      { weight: 205, reps: 8 },
      { weight: 225, reps: 6 },
    ],
  },
  {
    id: "3",
    name: "Deadlift",
    sets: [
      { weight: 225, reps: 8 },
      { weight: 275, reps: 6 },
      { weight: 315, reps: 4 },
    ],
  },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Workout Log</h1>

      <div className="mb-8">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "do MMM yyyy") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Workouts for {format(date, "do MMM yyyy")}
        </h2>

        {mockWorkouts.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center">
                No workouts logged for this date.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {mockWorkouts.map((workout) => (
              <Card key={workout.id}>
                <CardHeader>
                  <CardTitle>{workout.name}</CardTitle>
                  <CardDescription>
                    {workout.sets.length} sets logged
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {workout.sets.map((set, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm border-b last:border-b-0 pb-2 last:pb-0"
                      >
                        <span className="text-muted-foreground">
                          Set {index + 1}
                        </span>
                        <span className="font-medium">
                          {set.weight} lbs x {set.reps} reps
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
