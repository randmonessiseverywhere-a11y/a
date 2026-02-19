// prisma/seed.ts
/**
 * Database Seed Script
 *
 * Creates:
 * 1. Admin user account
 * 2. Regular user account (for testing)
 * 3. Demo learning paths
 * 4. Demo lessons (without actual files)
 *
 * Run with: npx prisma db seed
 */

import { PrismaClient, Role, FileType } from '@prisma/client';
import * as bcrypt from 'bcrypt';
//import { createHash } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...\n');

  // ==================== USERS ====================
  console.log('👥 Creating users...');

  // Hash passwords
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);
  // const adminPassword = createHash('sha256').update('admin123').digest('hex');
  //const userPassword = createHash('sha256').update('user123').digest('hex');

  // Create Admin User
  const admin = await prisma.user.upsert({
    where: { email: 'admin@cyberlearn.com' },
    update: {},
    create: {
      email: 'admin@cyberlearn.com',
      password: adminPassword,
      role: Role.ADMIN,
    },
  });
  console.log('✅ Admin created:', admin.email);

  // Create Regular User
  const user = await prisma.user.upsert({
    where: { email: 'student@cyberlearn.com' },
    update: {},
    create: {
      email: 'student@cyberlearn.com',
      password: userPassword,
      role: Role.USER,
    },
  });
  console.log('✅ User created:', user.email);

  // ==================== LEARNING PATHS ====================
  console.log('\n📚 Creating learning paths...');

  const webSecurityPath = await prisma.learningPath.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Web Application Security',
      description:
        'Master the fundamentals of web application security. Learn about common vulnerabilities like SQL injection, XSS, CSRF, and how to prevent them. This comprehensive path covers OWASP Top 10 and real-world attack scenarios.',
      published: true,
    },
  });
  console.log('✅ Created:', webSecurityPath.title);

  const networkSecurityPath = await prisma.learningPath.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Network Security Fundamentals',
      description:
        'Dive deep into network security concepts. Understand TCP/IP, network protocols, firewalls, IDS/IPS systems, and network attack patterns. Learn to secure networks against modern threats.',
      published: true,
    },
  });
  console.log('✅ Created:', networkSecurityPath.title);

  const cryptographyPath = await prisma.learningPath.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: 'Applied Cryptography',
      description:
        'Explore the world of cryptography. Learn symmetric and asymmetric encryption, hashing algorithms, digital signatures, SSL/TLS, and practical implementations in modern applications.',
      published: false, // Draft
    },
  });
  console.log('✅ Created:', cryptographyPath.title);

  const pentestingPath = await prisma.learningPath.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: 'Ethical Hacking & Penetration Testing',
      description:
        'Learn ethical hacking from scratch. Master reconnaissance, vulnerability scanning, exploitation techniques, and post-exploitation. Become a certified penetration tester with hands-on labs.',
      published: true,
    },
  });
  console.log('✅ Created:', pentestingPath.title);

  // ==================== LESSONS ====================
  console.log('\n📄 Creating lessons...');

  // Web Security Path Lessons
  const webLessons = [
    {
      title: 'Introduction to Web Security',
      description:
        'Overview of web application security landscape, common threats, and the importance of secure coding practices.',
      order: 1,
      fileType: FileType.PDF,
      fileUrl: '/uploads/pdfs/demo-web-intro.pdf',
    },
    {
      title: 'SQL Injection: From Basics to Advanced',
      description:
        'Deep dive into SQL injection attacks. Learn how attackers exploit vulnerable queries and how to implement proper parameterized queries and input validation.',
      order: 2,
      fileType: FileType.VIDEO,
      fileUrl: '/uploads/videos/demo-sql-injection.mp4',
    },
    {
      title: 'Cross-Site Scripting (XSS) Explained',
      description:
        'Understanding reflected, stored, and DOM-based XSS attacks. Learn proper output encoding and Content Security Policy implementation.',
      order: 3,
      fileType: FileType.PDF,
      fileUrl: '/uploads/pdfs/demo-xss.pdf',
    },
    {
      title: 'CSRF Protection Techniques',
      description:
        'Learn about Cross-Site Request Forgery attacks and implement anti-CSRF tokens, SameSite cookies, and double-submit patterns.',
      order: 4,
      fileType: FileType.VIDEO,
      fileUrl: '/uploads/videos/demo-csrf.mp4',
    },
    {
      title: 'Authentication & Session Management',
      description:
        'Best practices for implementing secure authentication, password hashing with bcrypt, JWT tokens, and session security.',
      order: 5,
      fileType: FileType.PDF,
      fileUrl: '/uploads/pdfs/demo-auth.pdf',
    },
  ];

  for (const lesson of webLessons) {
    const created = await prisma.lesson.create({
      data: {
        ...lesson,
        published: true,
        learningPathId: webSecurityPath.id,
      },
    });
    console.log(`  ✅ Lesson ${lesson.order}: ${lesson.title}`);
  }

  // Network Security Path Lessons
  const networkLessons = [
    {
      title: 'TCP/IP Protocol Suite Overview',
      description:
        'Understanding the foundation of network communication. Deep dive into TCP/IP layers, packet structure, and protocol analysis.',
      order: 6,
      fileType: FileType.VIDEO,
      fileUrl: '/uploads/videos/demo-tcpip.mp4',
    },
    {
      title: 'Network Scanning & Reconnaissance',
      description:
        'Learn to use tools like Nmap, Wireshark for network discovery and vulnerability assessment.',
      order: 7,
      fileType: FileType.PDF,
      fileUrl: '/uploads/pdfs/demo-nmap.pdf',
    },
    {
      title: 'Firewall Configuration & Rules',
      description:
        'Hands-on guide to configuring firewalls, creating effective rule sets, and understanding stateful vs stateless filtering.',
      order: 8,
      fileType: FileType.VIDEO,
      fileUrl: '/uploads/videos/demo-firewall.mp4',
    },
  ];

  for (const lesson of networkLessons) {
    const created = await prisma.lesson.create({
      data: {
        ...lesson,
        published: true,
        learningPathId: networkSecurityPath.id,
      },
    });
    console.log(`  ✅ Lesson ${lesson.order}: ${lesson.title}`);
  }

  // Cryptography Path Lessons (Draft)
  const cryptoLessons = [
    {
      title: 'Introduction to Cryptography',
      description:
        'History of cryptography, basic concepts, and modern applications in cybersecurity.',
      order: 9,
      fileType: FileType.PDF,
      fileUrl: '/uploads/pdfs/demo-crypto-intro.pdf',
    },
    {
      title: 'Symmetric Encryption: AES & DES',
      description:
        'Understanding block ciphers, encryption modes, and practical implementation of AES.',
      order: 10,
      fileType: FileType.VIDEO,
      fileUrl: '/uploads/videos/demo-symmetric.mp4',
    },
  ];

  for (const lesson of cryptoLessons) {
    const created = await prisma.lesson.create({
      data: {
        ...lesson,
        published: false, // Draft lessons
        learningPathId: cryptographyPath.id,
      },
    });
    console.log(`  ✅ Lesson ${lesson.order}: ${lesson.title} (Draft)`);
  }

  // Pentesting Path Lessons
  const pentestLessons = [
    {
      title: 'Information Gathering & OSINT',
      description:
        'Master open-source intelligence techniques. Learn to gather information about targets using public sources.',
      order: 11,
      fileType: FileType.VIDEO,
      fileUrl: '/uploads/videos/demo-osint.mp4',
    },
    {
      title: 'Vulnerability Scanning with Nessus',
      description:
        'Complete guide to using Nessus for automated vulnerability discovery and risk assessment.',
      order: 12,
      fileType: FileType.PDF,
      fileUrl: '/uploads/pdfs/demo-nessus.pdf',
    },
    {
      title: 'Exploitation with Metasploit Framework',
      description:
        'Hands-on exploitation using Metasploit. Learn to identify, exploit, and demonstrate vulnerabilities.',
      order: 13,
      fileType: FileType.VIDEO,
      fileUrl: '/uploads/videos/demo-metasploit.mp4',
    },
  ];

  for (const lesson of pentestLessons) {
    const created = await prisma.lesson.create({
      data: {
        ...lesson,
        published: true,
        learningPathId: pentestingPath.id,
      },
    });
    console.log(`  ✅ Lesson ${lesson.order}: ${lesson.title}`);
  }

  // ==================== SUMMARY ====================
  console.log('\n📊 Seed Summary:');
  console.log('=====================================');

  const totalUsers = await prisma.user.count();
  const totalPaths = await prisma.learningPath.count();
  const totalLessons = await prisma.lesson.count();
  const publishedPaths = await prisma.learningPath.count({
    where: { published: true },
  });
  const publishedLessons = await prisma.lesson.count({
    where: { published: true },
  });

  console.log(`👥 Users: ${totalUsers}`);
  console.log(`📚 Learning Paths: ${totalPaths} (${publishedPaths} published)`);
  console.log(`📄 Lessons: ${totalLessons} (${publishedLessons} published)`);
  console.log('\n🔐 Login Credentials:');
  console.log('=====================================');
  console.log('Admin Account:');
  console.log('  Email: admin@cyberlearn.com');
  console.log('  Password: admin123');
  console.log('\nStudent Account:');
  console.log('  Email: student@cyberlearn.com');
  console.log('  Password: user123');
  console.log('\n✨ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
