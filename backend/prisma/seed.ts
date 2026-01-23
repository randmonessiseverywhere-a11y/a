import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clean database
  await prisma.enrollmentToken.deleteMany();
  await prisma.quizSubmission.deleteMany();
  await prisma.questionAnswer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.progress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  await prisma.learningPath.deleteMany();
  await prisma.userProfile.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const instructorPassword = await bcrypt.hash('instructor123', 10);
  const studentPassword = await bcrypt.hash('student123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@learning.com',
      username: 'admin',
      password: adminPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      profile: {
        create: { bio: 'Platform administrator' },
      },
    },
  });

  const instructor = await prisma.user.create({
    data: {
      email: 'instructor@learning.com',
      username: 'instructor',
      password: instructorPassword,
      firstName: 'John',
      lastName: 'Doe',
      role: 'INSTRUCTOR',
      profile: {
        create: { bio: 'Cybersecurity expert with 10+ years experience' },
      },
    },
  });

  const student1 = await prisma.user.create({
    data: {
      email: 'student1@learning.com',
      username: 'student1',
      password: studentPassword,
      firstName: 'Alice',
      lastName: 'Smith',
      role: 'STUDENT',
      profile: {
        create: { bio: 'Beginner in cybersecurity' },
      },
    },
  });

  const student2 = await prisma.user.create({
    data: {
      email: 'student2@learning.com',
      username: 'student2',
      password: studentPassword,
      firstName: 'Bob',
      lastName: 'Johnson',
      role: 'STUDENT',
      profile: {
        create: { bio: 'Intermediate learner' },
      },
    },
  });

  // Create learning paths
  const path1 = await prisma.learningPath.create({
    data: {
      title: 'Web Application Security Fundamentals',
      description: 'Learn the basics of securing web applications against common attacks',
      difficulty: 'BEGINNER',
      creatorId: instructor.id,
    },
  });

  const path2 = await prisma.learningPath.create({
    data: {
      title: 'Network Security Essentials',
      description: 'Master network protocols, firewalls, and intrusion detection',
      difficulty: 'INTERMEDIATE',
      creatorId: instructor.id,
    },
  });

  const path3 = await prisma.learningPath.create({
    data: {
      title: 'Penetration Testing Masterclass',
      description: 'Advanced penetration testing techniques and methodologies',
      difficulty: 'ADVANCED',
      creatorId: instructor.id,
    },
  });

  // Create modules for path1
  const module1_1 = await prisma.module.create({
    data: {
      title: 'Introduction to OWASP Top 10',
      description: 'Understanding the most critical security risks',
      learningPathId: path1.id,
      order: 1,
    },
  });

  const module1_2 = await prisma.module.create({
    data: {
      title: 'SQL Injection Prevention',
      description: 'Protecting applications from SQL injection attacks',
      learningPathId: path1.id,
      order: 2,
    },
  });

  // Create modules for path2
  const module2_1 = await prisma.module.create({
    data: {
      title: 'Network Protocols and Security',
      description: 'Deep dive into TCP/IP, DNS, and secure protocols',
      learningPathId: path2.id,
      order: 1,
    },
  });

  const module2_2 = await prisma.module.create({
    data: {
      title: 'Firewall Configuration',
      description: 'Implementing and managing firewalls',
      learningPathId: path2.id,
      order: 2,
    },
  });

  // Create lessons for module1_1
  const lesson1_1_1 = await prisma.lesson.create({
    data: {
      title: 'What is OWASP?',
      content: 'OWASP (Open Web Application Security Project) is a nonprofit organization focused on improving software security...',
      moduleId: module1_1.id,
      order: 1,
      videoUrl: 'https://youtube.com/watch?v=example1',
    },
  });

  const lesson1_1_2 = await prisma.lesson.create({
    data: {
      title: 'The OWASP Top 10 List',
      content: 'The OWASP Top 10 includes: 1. Broken Access Control, 2. Cryptographic Failures, 3. Injection...',
      moduleId: module1_1.id,
      order: 2,
      videoUrl: 'https://youtube.com/watch?v=example2',
    },
  });

  // Create lessons for module1_2
  const lesson1_2_1 = await prisma.lesson.create({
    data: {
      title: 'Understanding SQL Injection',
      content: 'SQL Injection is an attack technique where an attacker inserts SQL statements into input fields...',
      moduleId: module1_2.id,
      order: 1,
      videoUrl: 'https://youtube.com/watch?v=example3',
    },
  });

  // Create quiz for module1_1
  const quiz1 = await prisma.quiz.create({
    data: {
      title: 'OWASP Top 10 Quiz',
      description: 'Test your knowledge of the OWASP Top 10',
      moduleId: module1_1.id,
      passingScore: 70,
    },
  });

  // Create questions for quiz1
  const question1 = await prisma.question.create({
    data: {
      quizId: quiz1.id,
      text: 'What does OWASP stand for?',
      type: 'MULTIPLE_CHOICE',
      points: 10,
    },
  });

  await prisma.questionOption.create({
    data: {
      questionId: question1.id,
      text: 'Open Web Application Security Project',
      isCorrect: true,
    },
  });

  await prisma.questionOption.create({
    data: {
      questionId: question1.id,
      text: 'Online Web Application Software Platform',
      isCorrect: false,
    },
  });

  await prisma.questionOption.create({
    data: {
      questionId: question1.id,
      text: 'Open Worldwide Application Security Protocol',
      isCorrect: false,
    },
  });

  const question2 = await prisma.question.create({
    data: {
      quizId: quiz1.id,
      text: 'SQL Injection is ranked in the OWASP Top 10?',
      type: 'TRUE_FALSE',
      points: 10,
    },
  });

  await prisma.questionOption.create({
    data: {
      questionId: question2.id,
      text: 'True',
      isCorrect: true,
    },
  });

  await prisma.questionOption.create({
    data: {
      questionId: question2.id,
      text: 'False',
      isCorrect: false,
    },
  });

  // Enroll students
  await prisma.enrollment.create({
    data: {
      userId: student1.id,
      learningPathId: path1.id,
    },
  });

  await prisma.enrollment.create({
    data: {
      userId: student2.id,
      learningPathId: path1.id,
    },
  });

  await prisma.enrollment.create({
    data: {
      userId: student1.id,
      learningPathId: path2.id,
    },
  });

  // Create progress records
  await prisma.progress.create({
    data: {
      userId: student1.id,
      lessonId: lesson1_1_1.id,
      completed: true,
    },
  });

  await prisma.progress.create({
    data: {
      userId: student1.id,
      lessonId: lesson1_1_2.id,
      completed: false,
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log('\n📝 Test Credentials:');
  console.log('Admin: admin / admin123');
  console.log('Instructor: instructor / instructor123');
  console.log('Student: student1 / student123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });