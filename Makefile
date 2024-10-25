# GCP Configuration
PROJECT_ID := your-project-id
REGION := us-central1
REPOSITORY := pluscoder
IMAGE_NAME := pluscoder-landing
TAG := latest

# Full image path for artifact registry
IMAGE_PATH := $(REGION)-docker.pkg.dev/$(PROJECT_ID)/$(REPOSITORY)/$(IMAGE_NAME):$(TAG)

# Build docker image
build:
	docker build -t $(IMAGE_NAME):$(TAG) .

# Configure docker for GCP artifact registry
auth:
	gcloud auth configure-docker $(REGION)-docker.pkg.dev

# Tag and push to artifact registry
push: auth
	docker tag $(IMAGE_NAME):$(TAG) $(IMAGE_PATH)
	docker push $(IMAGE_PATH)

# Deploy to Cloud Run
deploy:
	gcloud run deploy $(IMAGE_NAME) \
		--image $(IMAGE_PATH) \
		--platform managed \
		--region $(REGION) \
		--project $(PROJECT_ID) \
		--allow-unauthenticated

# Full deployment pipeline
all: build push deploy

.PHONY: build auth push deploy all