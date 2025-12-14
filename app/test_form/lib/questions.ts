import { Category,  } from "./types";

export const questionCategories: Category[] = [
    {
      title: "Energy & Focus",
      description: "How do you prefer to direct your energy?",
      questions: [
        {
          id: 'q1',
          text: "At a party, you're more likely to:",
          options: [
            { value: 'E', text: "Interact with many people, including strangers" },
            { value: 'I', text: "Interact with a few people you know well" }
          ]
        },
        {
          id: 'q2',
          text: "When you need to recharge, you prefer to:",
          options: [
            { value: 'E', text: "Spend time with friends and family" },
            { value: 'I', text: "Spend time alone or in quiet activities" }
          ]
        },
        {
          id: 'q3',
          text: "In group discussions, you tend to:",
          options: [
            { value: 'E', text: "Share your thoughts readily and think out loud" },
            { value: 'I', text: "Listen more and think before speaking" }
          ]
        },
        {
          id: 'q4',
          text: "You feel more energized after:",
          options: [
            { value: 'E', text: "A busy day with lots of social interaction" },
            { value: 'I', text: "A quiet day with minimal social demands" }
          ]
        }
      ]
    },
    {
      title: "Information Processing",
      description: "How do you prefer to take in information?",
      questions: [
        {
          id: 'q5',
          text: "When learning something new, you prefer:",
          options: [
            { value: 'S', text: "Step-by-step instructions with concrete examples" },
            { value: 'N', text: "The big picture and underlying concepts" }
          ]
        },
        {
          id: 'q6',
          text: "You're more drawn to:",
          options: [
            { value: 'S', text: "Practical, proven methods and real experiences" },
            { value: 'N', text: "Innovative ideas and future possibilities" }
          ]
        },
        {
          id: 'q7',
          text: "When reading, you pay more attention to:",
          options: [
            { value: 'S', text: "The literal meaning and specific details" },
            { value: 'N', text: "The underlying themes and implications" }
          ]
        },
        {
          id: 'q8',
          text: "You trust:",
          options: [
            { value: 'S', text: "Your experience and what has worked before" },
            { value: 'N', text: "Your intuition and hunches about possibilities" }
          ]
        }
      ]
    },
    {
      title: "Decision Making",
      description: "How do you prefer to make decisions?",
      questions: [
        {
          id: 'q9',
          text: "When making important decisions, you rely more on:",
          options: [
            { value: 'T', text: "Logical analysis and objective criteria" },
            { value: 'F', text: "Personal values and how it affects people" }
          ]
        },
        {
          id: 'q10',
          text: "In conflicts, you're more likely to:",
          options: [
            { value: 'T', text: "Focus on finding the most logical solution" },
            { value: 'F', text: "Consider everyone's feelings and seek harmony" }
          ]
        },
        {
          id: 'q11',
          text: "You're more convinced by:",
          options: [
            { value: 'T', text: "Logical arguments and evidence" },
            { value: 'F', text: "Emotional appeals and personal stories" }
          ]
        },
        {
          id: 'q12',
          text: "When giving feedback, you tend to:",
          options: [
            { value: 'T', text: "Be direct and focus on what needs improvement" },
            { value: 'F', text: "Be tactful and consider the person's feelings" }
          ]
        }
      ]
    },
    {
      title: "Lifestyle & Structure",
      description: "How do you prefer to organize your life?",
      questions: [
        {
          id: 'q13',
          text: "You prefer to:",
          options: [
            { value: 'J', text: "Have things settled and decided" },
            { value: 'P', text: "Keep your options open and flexible" }
          ]
        },
        {
          id: 'q14',
          text: "When planning a vacation, you:",
          options: [
            { value: 'J', text: "Plan activities and book reservations in advance" },
            { value: 'P', text: "Keep it loose and decide what to do as you go" }
          ]
        },
        {
          id: 'q15',
          text: "Your workspace tends to be:",
          options: [
            { value: 'J', text: "Organized with everything in its place" },
            { value: 'P', text: "Somewhat cluttered but you know where things are" }
          ]
        },
        {
          id: 'q16',
          text: "You work better with:",
          options: [
            { value: 'J', text: "Deadlines and clear expectations" },
            { value: 'P', text: "Flexibility and the ability to adapt as you go" }
          ]
        }
      ]
    }
  ];