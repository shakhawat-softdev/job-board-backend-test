# Example API Requests

Base URL:
{{BASE_URL}}

## Create Job (Admin)

POST {{BASE_URL}}/api/jobs

Headers:
x-admin-secret: admin123

Body:
{
"title": "Email Marketing Specialist",
"company": "EmailMe",
"logo": "https://logo.clearbit.com/emailme.com",
"location": "Remote",
"category": "Marketing",
"type": "Full-time",
"salary": "$60k - $80k",
"description": "We're looking for an experienced Email Marketing Specialist to join our team.",
"tags": ["Marketing", "Design"]
}

---

## Get All Jobs

GET {{BASE_URL}}/api/jobs

---

## Get Single Job

GET {{BASE_URL}}/api/jobs/{job_id}

---

## Update Job (Admin)

PATCH {{BASE_URL}}/api/jobs/{job_id}

Headers:
x-admin-secret: admin123

Body:
{
"salary": "$70k - $90k",
"description": "Updated job description"
}

---

## Delete Job

DELETE {{BASE_URL}}/api/jobs/{job_id}

Headers:
x-admin-secret: admin123

---

## Submit Application

POST {{BASE_URL}}/api/applications

Body:
{
"job_id": "JOB_OBJECT_ID",
"name": "John Doe",
"email": "john@example.com",
"resume_link": "https://resume-link.com",
"cover_note": "I am very interested in this role."
}
