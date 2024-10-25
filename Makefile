# GCP Configuration
PROJECT_ID := bold-vortex-332122
REGION := us-central1
REPOSITORY := pluscoder
IMAGE_NAME := pluscoder-landing
TAG := latest

# Full image path for artifact registry
IMAGE_PATH := $(REGION)-docker.pkg.dev/$(PROJECT_ID)/$(REPOSITORY)/$(IMAGE_NAME):$(TAG)

# Build docker image
build:
	docker build --platform linux/amd64 -t $(IMAGE_NAME):$(TAG) .

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

# Run locally for testing
run:
	docker run --name $(IMAGE_NAME) -d -p 8080:8080 $(IMAGE_NAME):$(TAG)
	@echo "App running at http://localhost:8080"

# Stop local container
stop:
	docker stop $(IMAGE_NAME) || true
	docker rm $(IMAGE_NAME) || true

.PHONY: build auth push deploy run stop all